import React from 'react';

class DynamicPosts extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selectedButton: '',
      posts: [
        {
          title: 'Landscape',
          postArray: ['Hi', 'Hello']
        },
        {
          title: 'Beaches',
          postArray: ['Hi Beach', 'Hello Beach']
        },
        {
          title: 'Nature ',
          postArray: ['Hi Nature', 'Hello Nature']
        },
      ]
    }
  }

  getPosts = () => {
    let posts = [];
    if(this.state.selectedButton !== ''){
      const index = this.state.posts.findIndex(_tmpPost => this.state.selectedButton === _tmpPost.title);
      posts = this.state.posts[index].postArray;
    }
    return posts;
  }  

  render(){

    return (
      <div>
        {
          this.state.posts.map(_post => <button onClick={() => this.setState({selectedButton: _post.title})}>{_post.title}</button>)
        }
        {
          this.getPosts().map(_postEle => <h5>{_postEle}</h5>)
        }
        
      </div>
    );
  }
}

export default DynamicPosts;