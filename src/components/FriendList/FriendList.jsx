import css from './FriendList.module.css';
import friends from './friends.json';

export const FriendList = () => {
  return (
    <ul className={css[`friends-list`]}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        const statusClassName = isOnline ? css.online : css.offline;

        return (
          <li className={css.item} key={id}>
            <span className={`${css.status} ${statusClassName}`}></span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
