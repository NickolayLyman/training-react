import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../redux/selectors';
import { deletePost } from '../../redux/operation';
import MyButton from '../MyButton';

const useStyles = createUseStyles({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'gray',
    padding: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    padding: 10,
    width: 390,
    marginBottom: 20,
    border: '2px solid blue',
    borderRadius: 8,
    overflow: 'auto',
    '&:not(:nth-child(3n))': {
      marginRight: 20,
    },
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    marginRight: 20,
  },
  btn: {
    width: 200,
    padding: 4,
    color: 'white',
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderRadius: 5,
    fontWeight: 600,
    marginTop: 15,
    '&:hover': {
      backgroundColor: '#000080',
      borderColor: '#000080',
      outline: '#000080',
    },
  },
});
const PostList = () => {
  const dispatch = useDispatch();
  const st = useStyles();
  const postsData = useSelector(getPosts);
  const handleDeletePosts = id => dispatch(deletePost(id));
  return (
    <ul className={st.list}>
      {postsData.map(post => (
        <li key={post.id} className={st.listItem}>
          <div className={st.wrapper}>
            <h2 className={st.name}>{post.name}</h2>
            <h3>{post.title}</h3>
          </div>
          <p>{post.review}</p>
          <MyButton
            value="Delete"
            onClick={() => handleDeletePosts(post.id)}
            className={st.btn}
          />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
