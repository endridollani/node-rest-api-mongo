<br/>
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=express,nodejs,mongo,typescript" />
  </a>
  <p align="center">
    REST API with user authentication.
  </p>
</p>
<br />

### Setup

---

1. Install `npm` packages

   ```bash
   npm i
   ```

2. Login or Register to [MongoDb Atlas](https://www.mongodb.com/cloud/atlas/register)

3. Create a cluster and copy connection string

4. Create `.env` file in the project root dir and paste:

   ```env
   PORT=8080
   DB_CONNECTION_STRING="your-mongodb-atlas-connection-string"
   AUTH_SECRET='your-choosen-auth-secret-keyword'
   COOKIE_NAME='your-choosen-cookie-name'
   ```

5. Run the application
   ```bash
   npm run dev
   ```

### Swagger

---

After you have completed the steps above navigate to `http://localhost:8080/api-docs/#/`.

> **Note:** Modify `8080` in the url above with the PORT you specified in .env file.

You can also click the link displayed in your termial log when the app is running.
