class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  setMatchStatus(data) {
    this.hasBeenLiked = data;
    this.hasbeenSwiped = true;
  }

  getDogHtml() {
    const { name, avatar, bio, age } = this;
    return `
      <div class="dog-content">
        <img id="badge" class="badge" src="" />
          <img class="avatar" id="avatar" src="${avatar}" />
          <div class="dog-summary" id="dog-summary">
            <h2 class="name">${name}, ${age}</h2>
            <p class="bio">${bio}</p>
          </div>
        </div>
        <div id="hidden-msg"><h2>No more doggies :(</h2></div>
          `;
  }
}

export default Dog;
