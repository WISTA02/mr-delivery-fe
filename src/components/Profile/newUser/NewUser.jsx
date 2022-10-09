import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="ttttt@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+962 123 456 678" />
        </div>
        <div className="newUserItem">
          <label>Location</label>
          <input type="text" placeholder="Amman | JORDAN" />
        </div>
  
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
