# Meditation App

A React Native meditation application built with Expo Router, featuring personalized meditation recommendations, dark mode, reminders, and favorites management.

---

## User Stories

### 1. User Registration

**As a user,** I want to register by entering my username, email, and password, so that I can create an account.

**Acceptance Criteria:**
- Users can enter their username, email, and password in the sign-up form.
- Users can click "Sign Up" to register their account.
- An error alert is shown if any required field is left empty.
- After successful registration, the user is redirected to the Login page.
- A "Login" link is available for users who already have an account.

---

### 2. User Login

**As a user,** I want to log in with my email and password, so that I can access my personalized meditation experience.

**Acceptance Criteria:**
- Users can enter their email and password in the login form.
- Users can click "Login" to authenticate.
- An error alert is shown if any field is left empty.
- An error alert is shown if the email or password does not match the registered account.
- An error alert is shown if no account exists in storage.
- On successful login, the user is redirected to the Home screen.
- A "Sign Up" link is available for users who do not have an account.

---

### 3. Persistent Authentication State

**As a user,** I want the app to remember my login status, so that I don't have to log in every time I open the app.

**Acceptance Criteria:**
- The app checks AsyncStorage for stored user details on launch.
- If user details exist, the user is automatically redirected to the Home screen.
- If no user details are found, the user is shown the Login screen.
- A loading indicator is displayed while the app checks authentication state.

---

### 4. Home Screen — Welcome Message

**As a user,** I want to see a personalized welcome message on the home screen, so that I feel recognized when I open the app.

**Acceptance Criteria:**
- The home screen displays "Hello {username}!" using the name from the registered account.
- A subtitle reads "Find your perfect meditation" to guide the user.
- The greeting text adapts its color to be readable in both light and dark mode.

---

### 5. Daily Inspirational Quote

**As a user,** I want to see a random inspirational quote on the home screen, so that I feel motivated each day.

**Acceptance Criteria:**
- A random quote is fetched from an external API (`dummyjson.com`) when the home screen loads.
- A loading spinner is displayed while the quote is being fetched.
- The quote text color adjusts for readability in both light and dark mode.

---

### 6. Browse Popular Meditations

**As a user,** I want to browse a horizontally scrollable list of popular meditations, so that I can quickly discover trending practices.

**Acceptance Criteria:**
- A "Popular Meditations" section is displayed on the home screen.
- Meditation cards are displayed in a horizontal FlatList that scrolls left and right.
- Each card shows an image, target category, title, short description, and duration.
- A loading spinner is shown while data is being fetched.
- An error message is displayed if the data cannot be loaded.

---

### 7. View Meditation Details

**As a user,** I want to tap on a meditation card to view its full details, so that I can learn more before practicing.

**Acceptance Criteria:**
- Tapping a meditation card navigates to a detailed view of that meditation.
- The detail page displays the meditation image, title, target category, and duration.
- Two tabs — "About" and "Instructions" — let users switch between the description and step-by-step guidance.
- The "About" tab shows a full description of the meditation.
- The "Instructions" tab displays numbered step-by-step instructions.
- A loading indicator and error/empty states are handled gracefully.

---

### 8. Share Meditation

**As a user,** I want to share a meditation with friends, so that I can recommend practices I enjoy.

**Acceptance Criteria:**
- A share button is displayed in the header of the meditation detail page.
- Tapping the share button opens the device's native share dialog.
- The shared message includes the meditation title and duration.

---

### 9. Add/Remove Meditation to/from Favorites

**As a user,** I want to add a meditation to my favorites or remove it, so that I can curate a list of practices I love.

**Acceptance Criteria:**
- A footer bar at the bottom of the meditation detail page shows a heart icon and an "Add to favorites" button.
- Tapping the heart icon or the button toggles the meditation between favorite and non-favorite status.
- The heart icon fills with red when the meditation is a favorite.
- The button text changes to "Remove from favorites" when the item is already favorited.
- Favorites are persisted in AsyncStorage across app sessions.

---

### 10. View Favorites

**As a user,** I want to view all my favorite meditations in one place, so that I can easily access them.

**Acceptance Criteria:**
- A "My Favourites" option is available in the Settings screen.
- Tapping it navigates to a dedicated Favorites screen.
- The screen displays all meditations that have been marked as favorites.
- If no favorites exist, a "No favorite items found." message is shown.
- The favorites list updates when items are added or removed.

---

### 11. Navigate Between Screens

**As a user,** I want a header bar that lets me navigate between the Home and Settings screens, so that I can move around the app easily.

**Acceptance Criteria:**
- A header bar is displayed on the Home, Settings, and detail screens.
- A menu (home) icon on the left navigates to the Home screen.
- A settings icon on the right navigates to the Settings screen.
- On the meditation detail page, the settings icon is replaced with a share icon.

---

### 12. Toggle Dark/Light Mode

**As a user,** I want to switch between light and dark mode, so that the app is comfortable to use in any lighting environment.

**Acceptance Criteria:**
- A "Theme Change" option is available in the Settings screen.
- Tapping it navigates to a screen with a Switch toggle labeled "Dark Mode" / "Light Mode".
- Toggling the switch changes the app theme from light to dark and vice versa.
- All screens — Home, Settings, Favorites, Daily Reminders, Meditation Details, and their components — reflect the selected theme.
- Text, backgrounds, and interactive elements are properly colored for readability in both modes.

---

### 13. Set Daily Reminders

**As a user,** I want to set daily reminders for my meditation practice, so that I stay consistent.

**Acceptance Criteria:**
- A "Daily Reminders" option is available in the Settings screen.
- Tapping it navigates to the Daily Reminders screen.
- Users can select a date using a calendar picker.
- Users can enter a time manually in HH:mm format.
- Users can click "Add Reminder" to schedule a notification.
- The reminder triggers a system notification at the specified date and time.
- All reminders are listed on the screen with their date and time.
- Each reminder can be deleted individually.
- An error is shown if the selected time is in the past.

---

### 14. Logout

**As a user,** I want to log out of the app, so that my account is secured when I'm done using it.

**Acceptance Criteria:**
- A "Logout" button is displayed at the bottom of the Settings screen.
- Tapping the logout button clears the stored user details from AsyncStorage.
- The user is redirected to the Login screen after logout.

---

### 15. Error and Loading States

**As a user,** I want to see clear loading indicators and error messages when data is being fetched or something goes wrong, so that I understand what the app is doing.

**Acceptance Criteria:**
- A loading spinner is shown while quotes, meditation data, or favorites are being loaded.
- Error messages such as "Something went wrong" or "No data available" are displayed when applicable.
- Empty states like "No favorite items found." and "No reminders yet." guide the user when there is no content.
- All error and empty-state text colors adapt to the current theme.