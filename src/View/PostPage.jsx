import { createUseStyles } from 'react-jss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../components/FormComponent/Form';
import Field from '../components/FormComponent/Field';
import MyButton from '../components/MyButton';
import PostList from '../components/PostList/PostList';
import { addPost, fetchedPost, deletePost } from '../redux/operation';
import { fetchPosts } from '../redux/selectors';

const useStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 30,
    alignItems: 'start',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 500,
    marginBottom: 20,
  },
  post: {
    width: 600,
  },
  btn: {
    width: 200,
    padding: 4,
    color: 'white',
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderRadius: 5,
    fontWeight: 600,
    marginTop: 20,
    '&:hover': {
      backgroundColor: '#000080',
      borderColor: '#000080',
      outline: '#000080',
    },
    '&:disabled': {
      backgroundColor: 'gray',
      borderColor: 'gray',
    },
  },
});

const PostPage = () => {
  const st = useStyles();
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const dispatch = useDispatch();
  const posts = useSelector(fetchPosts);

  useEffect(() => {
    dispatch(fetchedPost());
  }, [dispatch]);

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(addPost({ name, title, review }));
    resetForm();
  };

  const disabled =
    name.length < 4 ||
    title.length < 4 ||
    review.length < 4 ||
    review.length > 20
      ? true
      : false;

  const resetForm = () => {
    setName('');
    setTitle('');
    setReview('');
  };

  const handleDelete = id => {
    deletePost(id);
  };

  const handleFormChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'title':
        setTitle(value);
        break;
      case 'post':
        setReview(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Form className={st.form} type="submit" onSubmit={handleFormSubmit}>
        <div className={st.wrapper}>
          <Field
            name="name"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className={st.input}
            onChange={handleFormChange}
            value={name}
            placeholder="Enter minimum 4 letters"
          />
          <Field
            name="title"
            id="outlined-basic"
            label="Title"
            variant="outlined"
            className={st.input}
            onChange={handleFormChange}
            value={title}
            placeholder="Enter minimum 4 letters"
          />
        </div>
        <Field
          id="outlined-multiline-static"
          name="post"
          label="Post"
          variant="outlined"
          className={st.post}
          onChange={handleFormChange}
          value={review}
          placeholder="Enter minimum 20 letters"
          multiline
          rows={5}
        />
        <MyButton
          type="submit"
          value="POST"
          className={st.btn}
          disabled={disabled}
        />
      </Form>
      {posts?.length > 0 && <PostList onDelete={handleDelete} />}
    </>
  );
};

export default PostPage;
