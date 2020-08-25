const redis = require('redis');


const CHANNELS = {
    TEST: 'TEST',
    BLOCKCHAIN: 'BLOCKCHAIN'
};

class PubSub {
  constructor({ blockchain}) {
      this.blockchain = blockchain;

      this.publisher = redis.createClient();
      this.subscriber = redis.createClient();
    
       this.subscriber.subscribe(CHANNELS.TEST);
       this.subscriber.subscribe(CHANNELS.BLOCKCHAIN);

       this.subscribeToCHannels();

    
       this.subscriber.on('message', (channel, message) => this.handleMessage(channel, message));
   }

   handleMessage(channel, message) {
      console.log(`Message received. Channel: ${channel}. Message: ${message}.`);

      const parsedMessage = JSON.parse(message);

      if (channel === CHANNELS.BLOCKCHAIN) {
          this.blockchain.replaceChain(parsedMessage);
      }
    }

    subscribeToCHannels() {
        Object.values(CHANNELS).forEach(channel => {
            this.subscriber.subscribe(channel);
        }); 
    }

    publish({ channel, message }) {
        this.publisher.publish(channel, message);
    }

    broadcastChain() {
        this.publish({
            channel: CHANNELS.BLOCKCHAIN,
            message: JSON.stringify(this.blockchain.chain)
        })
    }
}

const testPubSub = new PubSub();

setTimeout(() => testPubSub.publisher.publish(CHANNELS.TEST, 'foo'), 1000);