function MainHeader({ child, onOpen }) {
  return (
    <>
      <div>
        <button onClick={onOpen}> New PostList</button>
      </div>
    </>
  );
}
export default MainHeader;
