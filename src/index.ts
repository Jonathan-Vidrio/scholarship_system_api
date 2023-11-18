import app from "./app";
import { PORT } from "./utils/constants";

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀, http://localhost:${PORT}`);
});