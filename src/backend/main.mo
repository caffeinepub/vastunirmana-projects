import Principal "mo:core/Principal";
import Map "mo:core/Map";
import List "mo:core/List";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Int "mo:core/Int";

actor {
  type ContactMessage = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactMessage {
    public func compare(message1 : ContactMessage, message2 : ContactMessage) : Order.Order {
      Int.compare(message2.timestamp, message1.timestamp);
    };
  };

  // Admin info type
  type AdminInfo = {
    owner : Principal;
    isAdmin : (Principal -> Bool);
  };

  // Check admin and get admin info
  func checkAdmin(caller : Principal) : AdminInfo {
    if (caller.isAnonymous()) {
      Runtime.trap("Anonymous principal is not allowed to read messages.");
    };
    {
      owner = caller;
      isAdmin = func(p) { p == caller };
    };
  };

  let messagesMap = Map.empty<Principal, List.List<ContactMessage>>();

  public shared ({ caller }) func submitMessage(message : ContactMessage) : async () {
    let newMessage = {
      name = message.name;
      email = message.email;
      phone = message.phone;
      message = message.message;
      timestamp = Time.now();
    };
    let messageList = switch (messagesMap.get(caller)) {
      case (null) { List.empty<ContactMessage>() };
      case (?existing) { existing };
    };
    messageList.add(newMessage);
    messagesMap.add(caller, messageList);
  };

  public shared ({ caller }) func getAllMessages() : async [ContactMessage] {
    let adminInfo = checkAdmin(caller);
    messagesMap.values().flatMap(func(list){ list.values() }).toArray().sort();
  };

  public query ({ caller }) func getCallerMessages() : async [ContactMessage] {
    switch (messagesMap.get(caller)) {
      case (null) { [] };
      case (?messageList) { messageList.toArray().sort() };
    };
  };
};
