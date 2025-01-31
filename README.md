# 🚀 Headless AEM 6.5+ Implementation with React  

This project demonstrates a headless implementation of **Adobe Experience Manager (AEM) 6.5+** using **React** in a local environment. The goal is to retrieve structured content from AEM via GraphQL API calls and display it in a modern React-based frontend in a relatively simple way.  

The project follows **Most** best practices from the **Adobe WKND tutorial** and additional resources. This example is a relatively basic one, but tries to incorporate the learnings from the above mentioned tutorial.  

This project assumes you have a local instance of AEM 6.5+ running, and have a basic understanding of how to build Content Fragment Models, GraphQL quiries and how to expose them, and authentication in AEM. 

## 🛠️ Tech Stack  

- **AEM 6.5+ Local Instance** 
- **React** (Frontend framework)  
- **Vite** (Fast development environment)  
- **Axios** (For API requests)  
- **React-Router-Dom** (Client-side routing)  
- **Storybook** (Component documentation)  
- **Font Awesome & Google Fonts** (UI enhancements)  
- **Basic CSS and Selectors**

---

## 📌 Features  

### **AEM Content Management**  
- Structured as **Content Fragments** with fields for:  
  - **Article Title**  
  - **Featured Image**  
  - **Article Content**  
- **Content Fragment Model** defines the structure.  
- Tagging system for organization.  

### **GraphQL API Integration**  
- AEM’s **GraphQL API** fetches content dynamically.
- Optimized queries ensure efficient data retrieval.  

### **Storybook for Component Management**  
- **Component library** for UI elements.  
- Isolates styling and documents fonts/colors.  

### **React Application Architecture**  
- **Vite** for fast builds and live reloading.  
- **Axios** for GraphQL requests.  
- **React-Router-Dom** for seamless navigation.  

---

## ⚙️ Installation & Setup  

### **1️⃣ Clone the Repository**  

git clone https://github.com/your-username/your-repo.git
cd your-repo

### **2️⃣ Install Dependencies
npm install

### **3️⃣ Start Development Servers
yarn storybook

yarn dev

### 🛠️ GraphQL Queries Used
Below is an example of the GraphQL query used to fetch all articles from AEM:

```graphql
query allArticles {
  articleModelList {
    items {
      _path
      _tags
      articleTitle
      featuredImage {
        ... on ImageRef {
          _path
          _authorUrl
        }
      }
      articleIntro {
        html
        plaintext
      }
    }
  }
}


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
