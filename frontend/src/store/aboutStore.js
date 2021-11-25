import AboutImageWords from "../components/AboutImageWords/AboutImageWords"
import ImageClient from "../components/ImageClient/ImageClient"
import notebook from "./../assets/images/notebook.png"

export const aboutStore = [
  {
    id: 1,
    key_1: "tab_1",
    key: "tab_content_1",
    image: <AboutImageWords />,
  },
  {
    id: 2,
    key_1: "tab_2",
    key: "tab_content_2",
    image: (
      <img
        src={notebook}
        alt="notebook"
        style={{ position: "absolute", right: "-2rem" }}
      />
    ),
  },
  {
    id: 3,
    key_1: "tab_3",
    key: "tab_content_3",
    image: <ImageClient />,
  },
]
