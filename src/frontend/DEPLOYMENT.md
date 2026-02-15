# Deployment Checklist

## Pre-Deployment Verification

### 1. Build Verification
- [ ] Run `npm run typescript-check` to verify TypeScript compilation
- [ ] Run `npm run build:skip-bindings` to verify production build completes
- [ ] Check `frontend/dist` directory is generated successfully

### 2. Route Configuration
- [ ] Verify hash-based routing is enabled in `App.tsx` (using `createHashHistory`)
- [ ] Test all routes load correctly in development mode
- [ ] Confirm no empty/stub page components are referenced in active routes

### 3. Backend Integration
- [ ] Verify backend canister is deployed and accessible
- [ ] Confirm `dfx generate backend` has been run to update type bindings
- [ ] Test authentication flow (login/logout) works correctly

## Post-Deployment Verification

### 1. Production URL Access
- [ ] Navigate to production URL and verify app loads
- [ ] Check browser console for any runtime errors
- [ ] Verify no 404 errors for static assets

### 2. Route Navigation
- [ ] Test navigation to all main routes:
  - [ ] `/` (Intro page)
  - [ ] `/#/home` (Home page)
  - [ ] `/#/ranks` (Ranks page)
  - [ ] `/#/divisions` (Divisions page)
  - [ ] `/#/lore` (Uniform & Armor page)
  - [ ] `/#/history` (History page)
  - [ ] `/#/photo` (Photo page)
- [ ] Verify browser back/forward buttons work correctly
- [ ] Test direct URL access to each route

### 3. Functionality Testing
- [ ] Test Internet Identity login flow
- [ ] Verify authenticated features work correctly
- [ ] Check responsive design on mobile and desktop
- [ ] Test dark/light mode switching (if applicable)

## Troubleshooting

### Build Failures
- Empty TypeScript files will cause build failures
- Ensure all imported components export valid React components
- Check for missing dependencies in `package.json`

### Route Issues
- Hash-based routing (`createHashHistory`) ensures routes work without server rewrites
- All routes should use `/#/path` format in production
- Verify `RouterProvider` is properly wrapped with required providers

### Deployment Failures
- Confirm backend canister is deployed before frontend
- Verify environment configuration in `env.json`
- Check canister IDs are correctly configured

## Emergency Rollback
If deployment fails or critical issues are found:
1. Note the specific error messages and affected routes
2. Document the issue in detail
3. Request rollback to previous stable version
4. Address issues in development before re-deploying
