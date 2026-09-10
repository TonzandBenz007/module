# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUserData, updateUserData, deleteUserData, getUser, listUsers, createProject, updateProject, deleteProject, getProject, listProjects } from '@dataconnect/generated';


// Operation CreateUserData: 
const { data } = await CreateUserData(dataConnect);

// Operation UpdateUserData:  For variables, look at type UpdateUserDataVars in ../index.d.ts
const { data } = await UpdateUserData(dataConnect, updateUserDataVars);

// Operation DeleteUserData: 
const { data } = await DeleteUserData(dataConnect);

// Operation GetUser: 
const { data } = await GetUser(dataConnect);

// Operation ListUsers: 
const { data } = await ListUsers(dataConnect);

// Operation CreateProject:  For variables, look at type CreateProjectVars in ../index.d.ts
const { data } = await CreateProject(dataConnect, createProjectVars);

// Operation UpdateProject:  For variables, look at type UpdateProjectVars in ../index.d.ts
const { data } = await UpdateProject(dataConnect, updateProjectVars);

// Operation DeleteProject:  For variables, look at type DeleteProjectVars in ../index.d.ts
const { data } = await DeleteProject(dataConnect, deleteProjectVars);

// Operation GetProject:  For variables, look at type GetProjectVars in ../index.d.ts
const { data } = await GetProject(dataConnect, getProjectVars);

// Operation ListProjects: 
const { data } = await ListProjects(dataConnect);


```