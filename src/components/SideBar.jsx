import { Stack } from "@mui/material";
import { categories } from "../constants";

function SideBar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat) => {
        return (
          <button
            key={cat.name}
            className="category-btn"
            onClick={() => setSelectedCategory(cat.name)}
            style={{
              background: cat.name === selectedCategory && "#E01F34",
              color: "#fff",
            }}
          >
            <span
              style={{
                color: cat.name === selectedCategory ? "#fff" : "#E01F34",
                marginRight: "15px",
              }}
            >
              {cat.icon}
            </span>
            <span
              style={{
                opacity: cat.name === selectedCategory ? "1" : "0.8",
              }}
            >
              {cat.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
}

export default SideBar;
