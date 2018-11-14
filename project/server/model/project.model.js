const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: { type: String, required: true, trim: true },
    member: [{ type: Schema.Types.ObjectId, ref: 'Member' }]
});

mongoose.set('useCreateIndex', true);

const ProjectModel = mongoose.model('Project', projectSchema);

class Project extends ProjectModel {
    static async createProject(name) {
        const project = new ProjectModel({name});
        await project.save()
        .catch(err => { 
            throw new Error('Error to create project.') 
        })

        return project.toObject();
    }

    static async showProjectDetail() {
        const project = await ProjectModel.find({}).populate('member')
        .catch(() => { throw new Error('Can not find any projects') });

        return project;
    }

    static async assignMember(projectId, memberId) {
        const project = await ProjectModel.findByIdAndUpdate(projectId, { $addToSet: { member: memberId } }, { new: true })
        .catch(err => { throw new Error('Can not update project') })
        if (!project) { throw new Error('Can not find project') }

        return project.toObject();
    }
}

module.exports = Project;