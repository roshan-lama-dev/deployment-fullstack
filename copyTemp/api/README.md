# Not to do full stack application

This app is build with MERN stack.
This app allows the user to add to do list using the form.

## How to use

1. Run `git clone <put git Path>`
2. Run `cd <repo name> `
3. Run `npm install`
4. Run `npm run dev` . Note, you must have nodemon installed, if not run `npm i nodemon -g` first

If successful your server will run at `http://localhost:8000`

## APIs

This api server handles all the task request and allows the client to run `CRUD` operation.

### Task Router

Task router follows the following URL path `{rooturl}/api/vv1/task`. More details are given below:

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION                                                                                                                                    |
| --- | ---- | ------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | `/`  | POST   | false      | This api allows client to send taskObject and store the task in database. The object should be in the following structure `{task:"", type:""}` |
| 1.  | `/`  | GET    | false      | This api allows client to fetch the data from the database                                                                                     |
| 1.  | `/`  | PUT    | false      | This api allows client to switch the task type                                                                                                 |
