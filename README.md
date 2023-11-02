# YouTube Clone aka My PlayTube

This project is a YouTube clone that replicates the core features and functionality of the popular video-sharing platform, YouTube. It is built using ReactJS, Tailwind CSS, and state management through Redux. The YouTube Data API is used for fetching data and powering the search and video playback functionalities.

## Features

- **Search Functionality**: Users can search for videos using keywords or queries, just like on YouTube.

- **Suggestion Features**: The application provides suggestions as users type in the search bar, helping them discover relevant content.

- **Debouncing**: To optimize search requests and prevent excessive API calls, debouncing is implemented when typing in the search bar.

- **Caching**: The application caches relevant data to improve load times and user experience.

- **Memoization**: Memoization techniques are applied to enhance performance by storing and reusing results of expensive function calls.

- **Redux**: State management is handled using Redux, providing a centralized and predictable state for the application.

- **React Router DOM**: Routing is implemented to navigate between Home, Search, and Watch pages seamlessly.

- **Higher Order Component (HOC)**: HOCs are used to enhance component reusability and to apply certain features to multiple components.

- **Generic Component**: Generic components are created to encapsulate common functionality and ensure a consistent user interface.

- **Custom Hooks**: Custom hooks are developed to encapsulate and share logic across different components.

- **API Integration**: The YouTube Data API is integrated to fetch video data and support features such as video playback and searching.

- **Responsive Design**: The application is responsive and provides a seamless experience on various screen sizes and devices.

## Pages

1. **Home**: The landing page where users can explore recommended videos.
2. **Search**: Allows users to search for videos based on their interests.
3. **Watch**: Provides the video playback interface, allowing users to watch the selected video and interact with the video's comments and live chat.

## Additional Features

- **Shimmer Effect**: Enhances the user interface by providing a loading shimmer effect for content placeholders.

- **Nested Comments**: Supports nested comments for more interactive and organized discussions.

- **Live Chatting using API Polling**: Implements live chat functionality through API polling, enabling users to engage in real-time conversations.

## Project Structure

- `src/`: The root directory of the project.
  - `assets/`: Contains project-specific assets like images and videos.
  - `components/`: Houses all React components used in the project.
  - `utils/`: Holds utility modules and files.
    - `custom-hooks/`: Custom hooks used in the application.
    - `shimmer/`: Files related to the shimmer effect, enhancing the user interface.
    - `slices/`: Contains Redux slices for different parts of your application state.
    - `store/`: Manages the Redux store for central state management.


