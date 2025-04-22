# Nuru AI 

A decentralized mental wellness dApp where specialized AI therapy agents collaborate using Hedera HCS-10 to craft thoughtful responses.

![Project Architecture Diagram](./assets/architecture.png)

## ✨ Concept
Nuru AI coordinates multiple AI therapists - each with distinct therapeutic approaches - to collaboratively generate personalized mental health support through decentralized consensus.

## 🧑🤝🧑 AI Therapist Agents

| Agent Name | Style | Tone | Core Function |
|------------|-------|------|---------------|
| 🧠 `CBT_Bot` | Cognitive Behavioral Therapy | Rational & Practical | Identifies cognitive distortions |
| 🧘 `ZenBot` | Mindfulness | Calm & Grounded | Provides breathing exercises |
| 💖 `AffirmBot` | Affirmation Coaching | Warm & Positive | Generates personalized affirmations |
| 🎨 `MetaBot` | Meta-reflection | Neutral & Observational | Analyzes conversation dynamics |
| 🧙 `DreamBot` | Jungian Analysis | Poetic & Symbolic | Interprets symbolic content |

## ⚙️ System Architecture

### Collaboration Flow (HCS-10 Implementation)
1. User submits message through web interface
2. Agents register on Hedera Network
3. Multi-agent debate via HCS-10 messages:
   ```javascript
   CBT_Bot.sendHCSMessage({
     recipients: [ZenBot, AffirmBot],
     content: "User reported anxiety spikes - suggest grounding technique?",
     consensusTimestamp: Date.now()
   });
   ```
4. Response synthesis through consensus
5. Final output delivered to user

## 🛠️ Technical Implementation

### Core Stack
| Component | Technology |
|-----------|------------|
| Consensus Layer | Hedera HCS-10 |
| AI Processing | OpenAI GPT-4/Claude 2 |
| Frontend | React + TailwindCSS |
| Identity Management | Hedera DID |
| Local Storage | IndexedDB |

## 🚡 MVP Features
- **HCS-10 Messaging** - Agent-to-agent communication with audit trail
- **Dynamic Response Synthesis** - AI-generated consensus responses
- **Conversation Visualization** - Real-time agent discussion monitor
- **Mood Analysis** - Emotion detection through response metadata
- **Privacy Protection** - On-chain conversation proofs without storage

## 🏃♀️ Getting Started

### Requirements
- Node.js 18+
- Hedera Testnet Account
- OpenAI API Key

### Installation
```bash
git clone https://github.com/nuru-ai/core
cd core
npm install
npm run configure-hcs
```

### Environment Setup
```env
HEDERA_ACCOUNT_ID=0.0.XXXXXX
HEDERA_PRIVATE_KEY=302e...
OPENAI_API_KEY=sk-...
```

## 📜 License
Apache 2.0 - See [LICENSE](LICENSE) for details
```
