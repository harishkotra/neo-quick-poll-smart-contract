// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NeoQuickPoll {
    struct Poll {
        string question;
        string[] options;
        mapping(string => uint256) votes;
        mapping(address => bool) hasVoted;
    }

    mapping(string => Poll) public polls;

    event PollCreated(string pollId, string question);
    event VoteCast(string pollId, string option, address voter);

    function createPoll(string memory pollId, string memory question, string[] memory options) public {
        require(bytes(polls[pollId].question).length == 0, "Poll already exists");
        
        Poll storage newPoll = polls[pollId];
        newPoll.question = question;
        newPoll.options = options;

        for (uint i = 0; i < options.length; i++) {
            newPoll.votes[options[i]] = 0;
        }

        emit PollCreated(pollId, question);
    }

    function vote(string memory pollId, string memory option) public {
        Poll storage poll = polls[pollId];
        require(bytes(poll.question).length > 0, "Poll does not exist");
        require(!poll.hasVoted[msg.sender], "Already voted");

        bool validOption = false;
        for (uint i = 0; i < poll.options.length; i++) {
            if (keccak256(bytes(poll.options[i])) == keccak256(bytes(option))) {
                validOption = true;
                break;
            }
        }
        require(validOption, "Invalid option");

        poll.votes[option]++;
        poll.hasVoted[msg.sender] = true;

        emit VoteCast(pollId, option, msg.sender);
    }

    function getPollResults(string memory pollId) public view returns (string memory, string[] memory, uint256[] memory) {
        Poll storage poll = polls[pollId];
        require(bytes(poll.question).length > 0, "Poll does not exist");

        uint256[] memory results = new uint256[](poll.options.length);
        for (uint i = 0; i < poll.options.length; i++) {
            results[i] = poll.votes[poll.options[i]];
        }

        return (poll.question, poll.options, results);
    }
}