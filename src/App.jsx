import React from "react";
import AppRoutes from "./routes/AppRoutes";

// Main App component
const App = () => {
  return (
    <div className="w-screen h-screen box-border">
      {/* Here all routes are render */}
      <AppRoutes />
    </div>
  );
};

export default App;
