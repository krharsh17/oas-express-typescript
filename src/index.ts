// Import your application
import server from "./server";
const port = 3000;


// Start the server
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});