import { test } from './fixture';
test('should navigate to the dashboard after login', async ({ login }) => {
    // Now we're logged in, so we can go to the dashboard
    await login; // Correct URL
});

