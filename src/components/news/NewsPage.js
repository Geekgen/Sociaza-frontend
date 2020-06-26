import React from 'react';
// import NewsApi from '../../api/NewsApi';






class NewsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        summary: '',
        country: '',
        clean_url: '',
        author: '',
        rights: '',
        link: '',
        rank: '',
        topic: '',
        language: '',
        title: '',
        published_date: '',
        _id: ''
    };
  }

 /*  async getNews() {
    try {
      const response = await NewsApi.getAllNews();
      const news = response.data;
      console.log('cheguei aqui');
     
    } catch (e) {
      console.error(e);
    }
  } */
 /*  async updateComment(comment, postId) {
    try {
      await CommentsApi.updateComment(postId, comment.id, comment);
    } catch (e) {
      console.error(e);
    }
  }
   */

  /* componentDidMount() {
    const idPost = Number(this.props.match.params.id);

    PostsApi.getPostById(idPost)
      .then(({ data }) => this.setState({ post: data }))
      .catch((err) => console.error(err));

    CommentsApi.getEmail()
      .then(({ data }) => this.setState({ email: data }))
      .catch((err) => console.error(err));

    this.setState({ postId: idPost });

    CommentsApi.getAllCommentsByPost(idPost)
      .then(({ data }) => this.setState({ comments: data }))
      .catch((err) => console.error(err));
  } */

  render() {
  

    return (
      <div>
        <div className='card'>
          <h5 className='card-header'>{'Title: ' + this.state.title}</h5>

          <div className='card-body'>
            <span className='badge badge-default float-right m-2'>
              {'Source: ' + this.state.clean_url}
            </span>
            {/* <span className='badge badge-default float-right m-2'>
              {this.state.summary}
            </span> 
            <div className='card-title'>{this.state.post.name}</div>*/}

            <div className='mt-3'>
              <span className='d-inline-block'>
                {' '}
                {this.state.published_date}
              </span>
            </div>
            <div className='mt-3'>
              <p className='headline-description'>
                {`Activity Description:`}
              </p>
              <span className='badge badge-default float-right m-2'>
              {this.state.summary}
              </span>
            </div>

          </div>
        </div>

        <br />
  {/*       <CommentForm
          onSubmit={(commentData) =>
            this.createComment(commentData, id, currentEmail)
          }
          post={posts}
        /> */}
      </div>
    );
  }
}

export default NewsPage; 
