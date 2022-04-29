import styles from './friend-list.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <section>
    <ul className={styles.list}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          <span
            className={
              friend.isOnline ? styles.statusOnline : styles.statusOffline
            }
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="Avatar"
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  </section>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
