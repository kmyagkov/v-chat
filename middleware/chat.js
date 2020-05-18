export default ({store, redirect}) => {
  if (!store.state.user) {
    const room = store.state.room;
    redirect(`/room/${room}/login?message=authFailed`);
  }
};
