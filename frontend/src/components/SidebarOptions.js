import { Add } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/history-etched-old-paper-scroll-feather-quill-compass-30890377.jpg"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2016/06/13/09/57/meeting-1453895_640.png"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/13/08/54/brain-2062057_1280.jpg"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_640.jpg"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/28/09/36/music-1285165_640.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2023/06/13/15/05/astronaut-8061095_640.png"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2022/06/24/17/35/relaxation-7282116_640.jpg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_640.jpg"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_640.jpg"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;