import Array "mo:core/Array";
import Iter "mo:core/Iter";
import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinStorage();

  let userProfiles = Map.empty<Principal, UserProfile>();
  let posters = Map.empty<Principal, List.List<Storage.ExternalBlob>>();

  type UserProfile = {
    name : Text;
  };

  public shared ({ caller }) func uploadPoster(blob : Storage.ExternalBlob) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can upload posters");
    };

    let currentPosters = switch (posters.get(caller)) {
      case (null) { List.fromArray([blob]) };
      case (?plist) {
        let array = plist.toArray();
        if (array.size() < 2) {
          let newArray = [blob].concat(array);
          List.fromArray(newArray);
        } else {
          let limitedArray = array.sliceToArray(0, 1);
          let newArray = [blob].concat(limitedArray);
          List.fromArray(newArray);
        };
      };
    };

    posters.add(caller, currentPosters);
  };

  public query ({ caller }) func getPosters() : async [Storage.ExternalBlob] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access posters");
    };
    switch (posters.get(caller)) {
      case (null) { [] };
      case (?plist) { plist.reverse().toArray() };
    };
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };
};
