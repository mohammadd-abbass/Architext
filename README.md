<img src="./readme/title1.svg"/>

<br><br>

<!-- project overview -->
<img src="./readme/title2.svg"/>

>Writing clean, maintainable code is no longer a manual effort - it's automated.
>
>Architext is your AI-powered architecture enforcer inside VS Code, helping you stick to your rules, your structure, and your standards.
>
>Forget the chaos of messy codebases. With Architext, your project architecture is no longer a guideline - it’s the default. 

<br><br>

<!-- System Design -->
<img src="./readme/title3.svg"/>

### System workflow
![System](./readme/images/diagram-export-5-19-2025-4_52_30-PM.png)

### Database ER Diagram
![Database](./readme/images/drawSQL-image-export-2025-05-19.png)
<br><br>

<!-- Project Highlights -->
<img src="./readme/title4.svg"/>

### Power of Architext

![Highlight](./readme/images/Slice%202.png)


- Rule-Based Architecture Enforcement <br/>
    Architext reads architectural rules from a default.arch.json or a custom *.arch.json file to validate your code and project structure.

- Folder Structure Validation <br/>
    Checks your project’s folder layout against the defined architecture rules and shows a visual validation report. <br/>
    `Ctrl + Alt + R`

- Code Style & Structure Validation <br/>
    Validates the currently opened file (e.g., controller, service) against the architecture rules - from naming conventions to restricted imports and function styles.
    <br/>
    `Ctrl + Alt + A`

- Auto-Generate Function Comments
    Generate meaningful comments for all functions in a file or selected ones using AI.
    <br/>
    `Ctrl + Alt + C`

- Function Complexity Analyzer
    Instantly calculate and display the complexity of any function or file.
    <br/>
    `Ctrl + Alt + O`

- Documentation & Showcase Website

    - A feature-rich landing page

    - Full documentation

    - Live playground for testing the extension

    - Config generator with AI assistance for creating your own .arch.json


<br><br>

<!-- Demo -->
<img src="./readme/title5.svg"/>


### VS-Code Extension
<!-- 1440x1024.png -->
| Architexture Validation                           | Auto Commenting                       |
| --------------------------------------- | ------------------------------------- |
| <img src="./readme/images/ezgif.com-optimize.gif" /> | <img src="./readme/images/ezgif.com-optimize (1).gif"/> |
### Docs Website
<!-- 1440x1024.png -->
| Landing Page                           | Docs Page                       |
| --------------------------------------- | ------------------------------------- |
| <img src="./readme/images/Screenshot 2025-05-20 121827.png" /> | <img src="./readme/images/Screenshot 2025-05-20 122007.png"/> |

| Playground Page                           | Config Generator                    |
| --------------------------------------- | ------------------------------------- |
| <img src="./readme/images/ViteReactTS-GoogleChrome2025-05-2023-02-22-ezgif.com-optimize.gif" />| <img src="./readme/images/ezgif.com-optimize (2).gif" /> |

<!-- ### Mobile View 
| Login screen                            | Register screen                       | Register screen                       |
| --------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | -->

<br><br>

<!-- Development & Testing -->
<img src="./readme/title6.svg"/>

### Development & Testing


| Architext Configuration                            | Architext Commands                   | 
| --------------------------------------- | ------------------------------------- | 
| <img src="./readme/images/Screenshot 2025-05-20 183602.png" /> | <img src="./readme/images/Screenshot 2025-05-20 183641.png" /> |

| Testing                           | Services                     |
| --------------------------------------- | ------------------------------------- |
| <img src="./readme/images/Screenshot 2025-05-21 051352.png" /> | <img src="./readme/images/Screenshot 2025-05-20 184421.png"/> |

<br><br>

<!-- AI Powered App -->
<img src="./readme/title7.svg"/>

### Openai Integration
<!-- 1440x1024.png -->
| Langchain Client                           | Langchain Client                       |
| --------------------------------------- | ------------------------------------- |
| <img src="./readme/images/Screenshot 2025-05-20 140335.png" /> | <img src="./readme/images/Screenshot 2025-05-20 140353.png"/> |

| Developer prompt                          | Comments Prompt                       |
| --------------------------------------- | ------------------------------------- |
| <img src="./readme/images/Screenshot 2025-05-20 140502.png" /> | <img src="./readme/images/Screenshot 2025-05-20 140449.png"/> |



<br><br>

<!-- Deployment -->
<img src="./readme/title8.svg"/>

### Deployment Workflow

- Architext is deployed through a **fully automated CI/CD pipeline** powered by **GitHub Actions** and **Docker**, ensuring consistent and reliable delivery.

- The deployment process is divided into **two stages**:
  - **Staging Deployment** (triggered on push to the `stage` branch)
  - **Production Deployment** (triggered on push to the `main` branch)

- Each core service in the project — **Node.js Server**, **Flask Server**, and **React Docs Website** — has its own `Dockerfile` and is containerized independently.

---

#### Staging Deployment

- **Server URL**: `http://15.188.84.203/`
- When code is pushed to the `stage` branch:
  - GitHub Actions builds and tags Docker images for all services.
  - These images are pushed to Docker Hub using the commit SHA as the tag.
  - A **self-hosted staging server** pulls the latest images and redeploys them using `docker-compose-delivery.yml`.
  - Old containers and volumes are pruned to ensure a clean environment.

---

#### Production Deployment

- **Server URL**: `http://35.181.172.247/`
- The production pipeline mirrors the staging process and is triggered on push to the `main` branch.
- It targets a **self-hosted production server**, pulling the final images and deploying the services using Docker Compose for a seamless release.







| Generate Comments API                           | Calculate Complexity API                       |
| --------------------------------------- | ------------------------------------- |
| <img src="./readme/images/Screenshot 2025-05-21 035609.png" /> |<img src="./readme/images/Screenshot 2025-05-21 035410.png" /> |

| Signup API                          | Login API |
| --------------------------------------- | ------------------------------------- |
|<img src="./readme/images/Screenshot 2025-05-21 040721.png" height=""/> |<img src="./readme/images/Screenshot 2025-05-21 041005.png" /> |

<br><br>