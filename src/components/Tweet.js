import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
function Tweet(props) {
  console.log(props);
  const { image } = props.tweet.user;
  const { message, timestamp } = props.tweet;
  return (
    <div className="tweet">
      <ProfileImage image={image} />
      <div className="body">
        <div className="top">
          <User user={props.tweet.user} />
          <TimeStamp timestamp={timestamp} />
        </div>
        <Message message={message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
