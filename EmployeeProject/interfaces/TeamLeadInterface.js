// Interface for Team Lead
const ITeamlead = {
    assignTask: function(task) {
        throw new Error('assignTask method not implemented');
    },
    reviewTask: function(task) {
        throw new Error('reviewTask method not implemented');
    },
    callMeeting: function() {
        throw new Error('Call meeting function not implemented')
    }
};

export default ITeamlead;

