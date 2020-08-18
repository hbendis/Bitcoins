class Block {
    constructor({timestamp, lastHash, hash, data}) {
     this.timestamp = timestamp;
     this.lastHash = lastHash;
     this.hash = hash;
     this.data = data;
    }
  }
    //const block1 = new Block({data:'foo-data', lastHash:'foo-hash', hash:'foo-data',timestamp:'01/01/01'});

    //console.log('block1', block1);


    //toString() {
        //return `Block -
        //      Timestamp : ${this.timestamp}
         //     Last Hash : ${this.lastHash.substring(0, 10)}
          //    Hash      : ${this.hash.substring(0, 10)}
           //   Data      : ${this.data}`;
     // }
     // static genesis() {
      //  return new this('Genesis time', '-----', 'f1r57-h45h', []);
     // }
    

    module.exports  = Block;

