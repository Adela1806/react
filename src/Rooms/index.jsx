import "./style.css";

const Rooms = ({ currentRoom, setShowListMenu, setCurrentRoom }) => {
  const handleRoomChange = (room) => {
    setCurrentRoom(room);
    setShowListMenu(false);
  };

  return (
    <div className="rooms">
      <h2>Select room</h2>

      <ul>
        <li
          onClick={() => {
            handleRoomChange("TamsutuoiPink");
          }}
          className={currentRoom === "TamsutuoiPink" ? "active" : ""}
        >
          TamSuTuoiPink
        </li>

        <li
          onClick={() => {
            handleRoomChange("nhieuchuyen");
          }}
          className={currentRoom === "nhieuchuyen" ? "active" : ""}
        >
          NhieuChuyen
        </li>

        <li
          onClick={() => {
            handleRoomChange("General");
          }}
          className={currentRoom === "General" ? "active" : ""}
        >
          General
        </li>

        <li
          onClick={() => {
            handleRoomChange("banhbeo");
          }}
          className={currentRoom === "banhbeo" ? "active" : ""}
        >
          BanhBeo
        </li>

        <li
          onClick={() => {
            handleRoomChange("cakhia");
          }}
          className={currentRoom === "cakhia" ? "active" : ""}
        >
          CaKhia
        </li>
      </ul>
    </div>
  );
};

export default Rooms;
