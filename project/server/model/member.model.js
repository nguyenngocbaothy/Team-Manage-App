const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: { type: String, required: true, trim: true },
    phone: { type: Number, required: true, unique: true, trim: true }
});

mongoose.set('useCreateIndex', true);

const MemberModel = mongoose.model('Member', memberSchema);

class Member extends MemberModel {
    static async createMember(name, phone) {
        const member = new MemberModel({name, phone});
        await member.save()
        .catch(err => { 
            if (err.code === 11000) throw new Error('Phone existed.')
            throw new Error('Error to create member.') 
        })

        return member.toObject();
    }
}

module.exports = Member;