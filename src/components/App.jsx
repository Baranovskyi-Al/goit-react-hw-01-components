import user from './social-profile/user.json';
import SocialProfile from './social-profile/social-profile';

import data from './statistics/data.json';
import Statistics from './statistics/statistics';

import friends from './friend-list/friends.json';
import FriendList from './friend-list/friend-list';

import items from './transaction-history/transactions.json';
import TransactionHistory from './transaction-history/transaction-history';

export const App = () => {
  return (
    <div className="container">
      <SocialProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" data={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={items} />
    </div>
  );
};
