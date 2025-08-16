# Harry Lorent's Portfolio

This project is a personal portfolio built using Next.js and TypeScript. It showcases my skills, experience, education, and contact information.

## Project Structure

- **app/**: Contains the main application files.
  - **layout.tsx**: Defines the layout component for the application.
  - **page.tsx**: Serves as the main page component.
  - **globals.css**: Contains global CSS styles.

- **components/**: Contains reusable components.
  - **Layout/**: Includes layout-related components.
    - **Header.tsx**: The header component with navigation and branding.
  - **Sections/**: Contains sections of the portfolio.
    - **ExperienceSection.tsx**: Displays work experience.
    - **SkillsSection.tsx**: Showcases skills.
    - **EducationSection.tsx**: Presents educational background.
    - **ContactSection.tsx**: Provides contact information.
  - **ui/**: Contains UI components.
    - **ScrollProgress.tsx**: Tracks and displays scroll progress.

- **data/**: Contains data related to the portfolio.
  - **portfolio-data.ts**: Holds experience, skills, education, and contact information.

- **hooks/**: Contains custom hooks.
  - **useActiveSection.ts**: Manages the active section state.

- **types/**: Contains TypeScript types.
  - **portfolio.ts**: Defines types related to portfolio data.

- **public/**: Intended for static assets (images, CV PDF).

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd harry-lorent
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the portfolio.

## Usage

Feel free to explore the code and customize it as needed. This portfolio can be used as a template for your own personal projects.

## License

This project is open-source and available under the MIT License.