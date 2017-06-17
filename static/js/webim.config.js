/**
 * Created by joeng on 2017/6/15.
 */
/*
 *  环信config
 * */
var WebIM = {};
WebIM.config = {
  /*
   * XMPP server
   */
  xmppURL: 'im-api.easemob.com',
  /*
   * Backend REST API URL
   */
  apiURL: 'http://a1.easemob.com',
  /*
   * Application AppKey
   */
  appkey: '1104170615178619#safeproject',

  /*
   * Whether to use wss
   * @parameter {Boolean} true or false
   */
  https: false,
  /*
   * isMultiLoginSessions
   * true: A visitor can sign in to multiple webpages and receive messages at all the webpages.
   * false: A visitor can sign in to only one webpage and receive messages at the webpage.
   */
  isMultiLoginSessions: true,
  /*
   * Set to auto sign-in
   */
  isAutoLogin: true,
  /**
   * Whether to use window.doQuery()
   * @parameter {Boolean} true or false
   */
  isWindowSDK: true,
  /**
   * isSandBox=true:  xmppURL: 'im-api-sandbox.easemob.com',  apiURL: '//a1-sdb.easemob.com',
   * isSandBox=false: xmppURL: 'im-api.easemob.com',          apiURL: '//a1.easemob.com',
   * @parameter {Boolean} true or false
   */
  isSandBox: false,
  /**
   * Whether to console.log in strophe.log()
   * @parameter {Boolean} true or false
   */
  isDebug: false,
  /**
   * will auto connect the xmpp server autoReconnectNumMax times in background when client is offline.
   * won't auto connect if autoReconnectNumMax=0.
   */
  autoReconnectNumMax: 2,
  /**
   * the interval seconds between each auto reconnectting.
   * works only if autoReconnectMaxNum >= 2.
   */
  autoReconnectInterval: 2,
  /**
   * webrtc supports WebKit and https only
   */
  isWebRTC: (/Firefox/.test(navigator.userAgent) || /WebKit/.test(navigator.userAgent)) && /^https\:$/.test(window.location.protocol),
  /**
   * after login, send empty message to xmpp server like heartBeat every 45s, to keep the ws connection alive.
   */
  heartBeatWait: 4500,
  /**
   * while http access,use ip directly,instead of ServerName,avoiding DNS problem.
   */
  isHttpDNS: false,

  /**
   * When a message arrived, the receiver send an ack message to the
   * sender, in order to tell the sender the message has delivered.
   * See call back function onReceivedMessage
   */
  delivery: true,

  /**
   * When a message read, the receiver send an ack message to the
   * sender, in order to tell the sender the message has been read.
   * See call back function onReadMessage
   */
  read: true,

  /**
   * Will encrypt text message and emoji message
   * {type:'none'}   no encrypt
   * {type:'base64'} encrypt with base64
   * {type:'aes',mode: 'ebc',key: '123456789easemob',iv: '0000000000000000'} encrypt with aes(ebc)
   * {type:'aes',mode: 'cbc',key: '123456789easemob',iv: '0000000000000000'} encrypt with aes(cbc)
   */
  encrypt: {type: 'none'}
};
