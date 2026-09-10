import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateProjectData {
  project_insert: Project_Key;
}

export interface CreateProjectVariables {
  title: string;
  description?: string | null;
}

export interface CreateTagData {
  tag_insert: Tag_Key;
}

export interface CreateTagVariables {
  name: string;
}

export interface CreateTaskData {
  task_insert: Task_Key;
}

export interface CreateTaskTagData {
  taskTag_insert: TaskTag_Key;
}

export interface CreateTaskTagVariables {
  taskId: UUIDString;
  tagId: UUIDString;
}

export interface CreateTaskVariables {
  title: string;
  projectId: UUIDString;
}

export interface CreateUserDataData {
  user_insert: User_Key;
}

export interface DeleteProjectData {
  project_delete?: Project_Key | null;
}

export interface DeleteProjectVariables {
  id: UUIDString;
}

export interface DeleteTagData {
  tag_delete?: Tag_Key | null;
}

export interface DeleteTagVariables {
  id: UUIDString;
}

export interface DeleteTaskData {
  task_delete?: Task_Key | null;
}

export interface DeleteTaskTagData {
  taskTag_delete?: TaskTag_Key | null;
}

export interface DeleteTaskTagVariables {
  taskId: UUIDString;
  tagId: UUIDString;
}

export interface DeleteTaskVariables {
  id: UUIDString;
}

export interface DeleteUserDataData {
  user_delete?: User_Key | null;
}

export interface GetProjectData {
  project?: {
    title: string;
    owner: {
      displayName?: string | null;
    };
  };
}

export interface GetProjectVariables {
  id: UUIDString;
}

export interface GetTagData {
  tag?: {
    name: string;
    color?: string | null;
  };
}

export interface GetTagVariables {
  id: UUIDString;
}

export interface GetTaskData {
  task?: {
    title: string;
    status: string;
    dueDate?: DateString | null;
  };
}

export interface GetTaskTagData {
  taskTag?: {
    task: {
      title: string;
    };
    tag: {
      name: string;
    };
  };
}

export interface GetTaskTagVariables {
  taskId: UUIDString;
  tagId: UUIDString;
}

export interface GetTaskVariables {
  id: UUIDString;
}

export interface GetUserData {
  user?: {
    email: string;
    displayName?: string | null;
  };
}

export interface ListProjectsData {
  projects: ({
    title: string;
    colorCode?: string | null;
  })[];
}

export interface ListTagsData {
  tags: ({
    name: string;
    color?: string | null;
  })[];
}

export interface ListTaskTagsData {
  taskTags: ({
    taskId: UUIDString;
    tagId: UUIDString;
  } & TaskTag_Key)[];
}

export interface ListTasksData {
  tasks: ({
    title: string;
    priority?: number | null;
  })[];
}

export interface ListTasksVariables {
  projectId: UUIDString;
}

export interface ListUsersData {
  users: ({
    displayName?: string | null;
    avatarUrl?: string | null;
  })[];
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface Tag_Key {
  id: UUIDString;
  __typename?: 'Tag_Key';
}

export interface TaskTag_Key {
  taskId: UUIDString;
  tagId: UUIDString;
  __typename?: 'TaskTag_Key';
}

export interface Task_Key {
  id: UUIDString;
  __typename?: 'Task_Key';
}

export interface UpdateProjectData {
  project_update?: Project_Key | null;
}

export interface UpdateProjectVariables {
  id: UUIDString;
  title?: string | null;
}

export interface UpdateTagData {
  tag_update?: Tag_Key | null;
}

export interface UpdateTagVariables {
  id: UUIDString;
  color?: string | null;
}

export interface UpdateTaskData {
  task_update?: Task_Key | null;
}

export interface UpdateTaskVariables {
  id: UUIDString;
  status?: string | null;
}

export interface UpdateUserDataData {
  user_update?: User_Key | null;
}

export interface UpdateUserDataVariables {
  displayName?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserDataRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserDataData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserDataData, undefined>;
  operationName: string;
}
export const createUserDataRef: CreateUserDataRef;

export function createUserData(): MutationPromise<CreateUserDataData, undefined>;
export function createUserData(dc: DataConnect): MutationPromise<CreateUserDataData, undefined>;

interface UpdateUserDataRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpdateUserDataVariables): MutationRef<UpdateUserDataData, UpdateUserDataVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: UpdateUserDataVariables): MutationRef<UpdateUserDataData, UpdateUserDataVariables>;
  operationName: string;
}
export const updateUserDataRef: UpdateUserDataRef;

export function updateUserData(vars?: UpdateUserDataVariables): MutationPromise<UpdateUserDataData, UpdateUserDataVariables>;
export function updateUserData(dc: DataConnect, vars?: UpdateUserDataVariables): MutationPromise<UpdateUserDataData, UpdateUserDataVariables>;

interface DeleteUserDataRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserDataData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteUserDataData, undefined>;
  operationName: string;
}
export const deleteUserDataRef: DeleteUserDataRef;

export function deleteUserData(): MutationPromise<DeleteUserDataData, undefined>;
export function deleteUserData(dc: DataConnect): MutationPromise<DeleteUserDataData, undefined>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;
export function getUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface CreateProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProjectVariables): MutationRef<CreateProjectData, CreateProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateProjectVariables): MutationRef<CreateProjectData, CreateProjectVariables>;
  operationName: string;
}
export const createProjectRef: CreateProjectRef;

export function createProject(vars: CreateProjectVariables): MutationPromise<CreateProjectData, CreateProjectVariables>;
export function createProject(dc: DataConnect, vars: CreateProjectVariables): MutationPromise<CreateProjectData, CreateProjectVariables>;

interface UpdateProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProjectVariables): MutationRef<UpdateProjectData, UpdateProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateProjectVariables): MutationRef<UpdateProjectData, UpdateProjectVariables>;
  operationName: string;
}
export const updateProjectRef: UpdateProjectRef;

export function updateProject(vars: UpdateProjectVariables): MutationPromise<UpdateProjectData, UpdateProjectVariables>;
export function updateProject(dc: DataConnect, vars: UpdateProjectVariables): MutationPromise<UpdateProjectData, UpdateProjectVariables>;

interface DeleteProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteProjectVariables): MutationRef<DeleteProjectData, DeleteProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteProjectVariables): MutationRef<DeleteProjectData, DeleteProjectVariables>;
  operationName: string;
}
export const deleteProjectRef: DeleteProjectRef;

export function deleteProject(vars: DeleteProjectVariables): MutationPromise<DeleteProjectData, DeleteProjectVariables>;
export function deleteProject(dc: DataConnect, vars: DeleteProjectVariables): MutationPromise<DeleteProjectData, DeleteProjectVariables>;

interface GetProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProjectVariables): QueryRef<GetProjectData, GetProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetProjectVariables): QueryRef<GetProjectData, GetProjectVariables>;
  operationName: string;
}
export const getProjectRef: GetProjectRef;

export function getProject(vars: GetProjectVariables, options?: ExecuteQueryOptions): QueryPromise<GetProjectData, GetProjectVariables>;
export function getProject(dc: DataConnect, vars: GetProjectVariables, options?: ExecuteQueryOptions): QueryPromise<GetProjectData, GetProjectVariables>;

interface ListProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListProjectsData, undefined>;
  operationName: string;
}
export const listProjectsRef: ListProjectsRef;

export function listProjects(options?: ExecuteQueryOptions): QueryPromise<ListProjectsData, undefined>;
export function listProjects(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListProjectsData, undefined>;

interface CreateTaskRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTaskVariables): MutationRef<CreateTaskData, CreateTaskVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateTaskVariables): MutationRef<CreateTaskData, CreateTaskVariables>;
  operationName: string;
}
export const createTaskRef: CreateTaskRef;

export function createTask(vars: CreateTaskVariables): MutationPromise<CreateTaskData, CreateTaskVariables>;
export function createTask(dc: DataConnect, vars: CreateTaskVariables): MutationPromise<CreateTaskData, CreateTaskVariables>;

interface UpdateTaskRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateTaskVariables): MutationRef<UpdateTaskData, UpdateTaskVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateTaskVariables): MutationRef<UpdateTaskData, UpdateTaskVariables>;
  operationName: string;
}
export const updateTaskRef: UpdateTaskRef;

export function updateTask(vars: UpdateTaskVariables): MutationPromise<UpdateTaskData, UpdateTaskVariables>;
export function updateTask(dc: DataConnect, vars: UpdateTaskVariables): MutationPromise<UpdateTaskData, UpdateTaskVariables>;

interface DeleteTaskRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteTaskVariables): MutationRef<DeleteTaskData, DeleteTaskVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteTaskVariables): MutationRef<DeleteTaskData, DeleteTaskVariables>;
  operationName: string;
}
export const deleteTaskRef: DeleteTaskRef;

export function deleteTask(vars: DeleteTaskVariables): MutationPromise<DeleteTaskData, DeleteTaskVariables>;
export function deleteTask(dc: DataConnect, vars: DeleteTaskVariables): MutationPromise<DeleteTaskData, DeleteTaskVariables>;

interface GetTaskRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetTaskVariables): QueryRef<GetTaskData, GetTaskVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetTaskVariables): QueryRef<GetTaskData, GetTaskVariables>;
  operationName: string;
}
export const getTaskRef: GetTaskRef;

export function getTask(vars: GetTaskVariables, options?: ExecuteQueryOptions): QueryPromise<GetTaskData, GetTaskVariables>;
export function getTask(dc: DataConnect, vars: GetTaskVariables, options?: ExecuteQueryOptions): QueryPromise<GetTaskData, GetTaskVariables>;

interface ListTasksRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListTasksVariables): QueryRef<ListTasksData, ListTasksVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListTasksVariables): QueryRef<ListTasksData, ListTasksVariables>;
  operationName: string;
}
export const listTasksRef: ListTasksRef;

export function listTasks(vars: ListTasksVariables, options?: ExecuteQueryOptions): QueryPromise<ListTasksData, ListTasksVariables>;
export function listTasks(dc: DataConnect, vars: ListTasksVariables, options?: ExecuteQueryOptions): QueryPromise<ListTasksData, ListTasksVariables>;

interface CreateTagRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTagVariables): MutationRef<CreateTagData, CreateTagVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateTagVariables): MutationRef<CreateTagData, CreateTagVariables>;
  operationName: string;
}
export const createTagRef: CreateTagRef;

export function createTag(vars: CreateTagVariables): MutationPromise<CreateTagData, CreateTagVariables>;
export function createTag(dc: DataConnect, vars: CreateTagVariables): MutationPromise<CreateTagData, CreateTagVariables>;

interface UpdateTagRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateTagVariables): MutationRef<UpdateTagData, UpdateTagVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateTagVariables): MutationRef<UpdateTagData, UpdateTagVariables>;
  operationName: string;
}
export const updateTagRef: UpdateTagRef;

export function updateTag(vars: UpdateTagVariables): MutationPromise<UpdateTagData, UpdateTagVariables>;
export function updateTag(dc: DataConnect, vars: UpdateTagVariables): MutationPromise<UpdateTagData, UpdateTagVariables>;

interface DeleteTagRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteTagVariables): MutationRef<DeleteTagData, DeleteTagVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteTagVariables): MutationRef<DeleteTagData, DeleteTagVariables>;
  operationName: string;
}
export const deleteTagRef: DeleteTagRef;

export function deleteTag(vars: DeleteTagVariables): MutationPromise<DeleteTagData, DeleteTagVariables>;
export function deleteTag(dc: DataConnect, vars: DeleteTagVariables): MutationPromise<DeleteTagData, DeleteTagVariables>;

interface GetTagRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetTagVariables): QueryRef<GetTagData, GetTagVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetTagVariables): QueryRef<GetTagData, GetTagVariables>;
  operationName: string;
}
export const getTagRef: GetTagRef;

export function getTag(vars: GetTagVariables, options?: ExecuteQueryOptions): QueryPromise<GetTagData, GetTagVariables>;
export function getTag(dc: DataConnect, vars: GetTagVariables, options?: ExecuteQueryOptions): QueryPromise<GetTagData, GetTagVariables>;

interface ListTagsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListTagsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListTagsData, undefined>;
  operationName: string;
}
export const listTagsRef: ListTagsRef;

export function listTags(options?: ExecuteQueryOptions): QueryPromise<ListTagsData, undefined>;
export function listTags(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListTagsData, undefined>;

interface CreateTaskTagRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTaskTagVariables): MutationRef<CreateTaskTagData, CreateTaskTagVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateTaskTagVariables): MutationRef<CreateTaskTagData, CreateTaskTagVariables>;
  operationName: string;
}
export const createTaskTagRef: CreateTaskTagRef;

export function createTaskTag(vars: CreateTaskTagVariables): MutationPromise<CreateTaskTagData, CreateTaskTagVariables>;
export function createTaskTag(dc: DataConnect, vars: CreateTaskTagVariables): MutationPromise<CreateTaskTagData, CreateTaskTagVariables>;

interface DeleteTaskTagRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteTaskTagVariables): MutationRef<DeleteTaskTagData, DeleteTaskTagVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteTaskTagVariables): MutationRef<DeleteTaskTagData, DeleteTaskTagVariables>;
  operationName: string;
}
export const deleteTaskTagRef: DeleteTaskTagRef;

export function deleteTaskTag(vars: DeleteTaskTagVariables): MutationPromise<DeleteTaskTagData, DeleteTaskTagVariables>;
export function deleteTaskTag(dc: DataConnect, vars: DeleteTaskTagVariables): MutationPromise<DeleteTaskTagData, DeleteTaskTagVariables>;

interface GetTaskTagRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetTaskTagVariables): QueryRef<GetTaskTagData, GetTaskTagVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetTaskTagVariables): QueryRef<GetTaskTagData, GetTaskTagVariables>;
  operationName: string;
}
export const getTaskTagRef: GetTaskTagRef;

export function getTaskTag(vars: GetTaskTagVariables, options?: ExecuteQueryOptions): QueryPromise<GetTaskTagData, GetTaskTagVariables>;
export function getTaskTag(dc: DataConnect, vars: GetTaskTagVariables, options?: ExecuteQueryOptions): QueryPromise<GetTaskTagData, GetTaskTagVariables>;

interface ListTaskTagsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListTaskTagsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListTaskTagsData, undefined>;
  operationName: string;
}
export const listTaskTagsRef: ListTaskTagsRef;

export function listTaskTags(options?: ExecuteQueryOptions): QueryPromise<ListTaskTagsData, undefined>;
export function listTaskTags(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListTaskTagsData, undefined>;

