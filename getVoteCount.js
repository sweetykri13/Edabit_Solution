getVoteCount =(upvotes,downvotes)=>{
    VoteCount=upvotes-downvotes;
    return VoteCount;
}
console.log(getVoteCount(13,13));