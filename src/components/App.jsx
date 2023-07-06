import React, { useState } from 'react';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showStatistic, setShowStatistic] = useState(false);
  const [showFriendList, setShowFriendList] = useState(false);
  const [showTransactionHistory, setTransactionHistory] = useState(false);

  const handleShowProfile = () => {
    setShowProfile(true);
    setShowStatistic(false);
    setShowFriendList(false);
    setTransactionHistory(false);
  };

  const handleShowStatistic = () => {
    setShowProfile(false);
    setShowStatistic(true);
    setShowFriendList(false);
    setTransactionHistory(false);
  };
  const handleShowFriendList = () => {
    setShowProfile(false);
    setShowStatistic(false);
    setShowFriendList(true);
    setTransactionHistory(false);
  };
  const handleShowTransactionHistory = () => {
    setShowProfile(false);
    setShowStatistic(false);
    setShowFriendList(false);
    setTransactionHistory(true);
  };
  const handleBack = () => {
    setShowProfile(false);
    setShowStatistic(false);
    setShowFriendList(false);
    setTransactionHistory(false);
  };

  return (
    <>
      {!showProfile &&
      !showStatistic &&
      !showFriendList &&
      !showTransactionHistory ? (
        <>
          <button onClick={handleShowProfile}>Show Profile</button>
          <button onClick={handleShowStatistic}>Show Statistic</button>
          <button onClick={handleShowFriendList}>Show Friend</button>
          <button onClick={handleShowTransactionHistory}>Show History</button>
        </>
      ) : (
        <>
          {showProfile && (
            <>
              <Profile />
              <button className={[`back-button`]} onClick={handleBack}>
                X
              </button>
            </>
          )}
          {showStatistic && (
            <>
              <Statistics />
              <button className={[`back-button`]} onClick={handleBack}>
                X
              </button>
            </>
          )}
          {showFriendList && (
            <>
              <FriendList />
              <button className={[`back-button`]} onClick={handleBack}>
                X
              </button>
            </>
          )}
          {showTransactionHistory && (
            <>
              <TransactionHistory />
              <button className={[`back-button`]} onClick={handleBack}>
                X
              </button>
            </>
          )}
        </>
      )}
    </>
  );
};
