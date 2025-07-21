import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function PeneCoinLanding() {
  const quotes = [
    "Erectus to the moon 🌕",
    "How hard can PENE go?",
    "Buy the dip, feel the trip 💥",
    "HODL like it’s throbbing",
    "One small PENE for man... one giant leap for meme-kind",
    "This coin’s got balls (and shaft) 💸",
    "Keep it stiff, keep it HODLed 🧱",
    "From 0 to 6.9 inches in seconds 📈",
    "Harder than your average coin",
    "Throbbing with potential",
    "Rise and shine, it’s PENE time ☀️",
    "Crypto's most arousing asset 💦"
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => {
        let next;
        do {
          next = Math.floor(Math.random() * quotes.length);
        } while (next === prev);
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const addTokenToMetaMask = async () => {
    if (!window.ethereum) {
      toast.error("MetaMask is not installed. Please install it to use this feature.");
      return;
    }

    try {
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: '0x06Bb4D4BBf8AfA54B9382bC439f899dCeF769d36',
            symbol: 'PENE',
            decimals: 18,
            image: 'https://raw.githubusercontent.com/boganstyle/pene-assets/main/logo.png'
          }
        }
      });

      if (wasAdded) {
        toast.success('✅ PENE token added to MetaMask!');
      } else {
        toast.error('❌ User rejected the token addition.');
      }
    } catch (error) {
      console.error('Error adding token:', error);
      toast.error('⚠️ There was an error adding the token.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6 font-sans">
      <Toaster position="top-right" reverseOrder={false} />
      <header className="flex justify-between items-center py-4 px-2 border-b border-purple-900">
        <h1 className="text-2xl font-extrabold text-purple-400 tracking-wider animate-pulse">🍆 PeneCoin</h1>
        <nav className="space-x-4">
          <a href="#tokenomics" className="hover:text-purple-400">Tokenomics</a>
          <a href="#buy" className="hover:text-purple-400">How to Buy</a>
          <a href="#roadmap" className="hover:text-purple-400">Roadmap</a>
          <a href="#whitepaper" className="hover:text-purple-400">Whitepaper</a>
          <a href="#signup" className="hover:text-purple-400">Sign Up</a>
          <a href="#game" className="hover:text-purple-400">Mini Game</a>
        </nav>
      </header>

      <section className="text-center space-y-6 py-16">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-6xl font-extrabold text-purple-300 drop-shadow-xl">
          🍆 PeneCoin
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-2xl text-gray-300 max-w-2xl mx-auto">
          The world's most dangerously funny meme coin. Unfiltered. Uncensored. Unstoppable.
        </motion.p>
        <p className="text-purple-400 font-mono text-lg h-8 transition-opacity duration-500">{quotes[currentQuote]}</p>
        <img src="https://raw.githubusercontent.com/boganstyle/pene-assets/main/meme-rocket.png" alt="Rocket Eggplant" className="mx-auto w-32 animate-bounce" />
        <Button onClick={addTokenToMetaMask} className="bg-purple-700 hover:bg-purple-600 text-white text-lg px-6 py-3 rounded-2xl shadow-lg animate-bounce">
          🚀 Add PENE to MetaMask
        </Button>
      </section>

      <section id="game" className="bg-black text-center py-16">
        <h2 className="text-4xl font-bold text-purple-400 mb-6">🎮 Pene Road Cross</h2>
        <p className="text-lg text-gray-300 mb-4">Dodge the regulators. Cross the meme streams. Score that virality.</p>
        <iframe
          src="https://boganstyle.github.io/pene-road-cross/index.html"
          className="mx-auto w-full max-w-3xl h-[600px] border-4 border-purple-700 rounded-xl shadow-lg"
          title="Pene Road Cross"
        ></iframe>
        <audio autoPlay loop>
          <source src="https://raw.githubusercontent.com/boganstyle/pene-assets/main/pene-8bit-metal.mp3" type="audio/mpeg" />
        </audio>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-purple-300 mb-4">🏆 Top 100 Meme Warriors</h3>
          <ul className="max-w-xl mx-auto text-left text-white text-sm bg-gray-900 rounded-lg shadow p-4 space-y-1">
            <li className="flex justify-between border-b border-purple-500 py-1 text-purple-400 font-bold">
              <span># 1</span>
              <span>ERECTUS PRO-BONER</span>
              <span>Score: 9999</span>
            </li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 2</span><span>Anonymous</span><span>Score: 1000</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 3</span><span>Anonymous</span><span>Score: 999</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 4</span><span>Anonymous</span><span>Score: 998</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 5</span><span>Anonymous</span><span>Score: 997</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 6</span><span>Anonymous</span><span>Score: 996</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 7</span><span>Anonymous</span><span>Score: 995</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 8</span><span>Anonymous</span><span>Score: 994</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 9</span><span>Anonymous</span><span>Score: 993</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 10</span><span>Anonymous</span><span>Score: 992</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 11</span><span>Anonymous</span><span>Score: 991</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 12</span><span>Anonymous</span><span>Score: 990</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 13</span><span>Anonymous</span><span>Score: 989</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 14</span><span>Anonymous</span><span>Score: 988</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 15</span><span>Anonymous</span><span>Score: 987</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 16</span><span>Anonymous</span><span>Score: 986</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 17</span><span>Anonymous</span><span>Score: 985</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 18</span><span>Anonymous</span><span>Score: 984</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 19</span><span>Anonymous</span><span>Score: 983</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 20</span><span>Anonymous</span><span>Score: 982</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 21</span><span>Anonymous</span><span>Score: 981</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 22</span><span>Anonymous</span><span>Score: 980</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 23</span><span>Anonymous</span><span>Score: 979</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 24</span><span>Anonymous</span><span>Score: 978</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 25</span><span>Anonymous</span><span>Score: 977</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 26</span><span>Anonymous</span><span>Score: 976</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 27</span><span>Anonymous</span><span>Score: 975</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 28</span><span>Anonymous</span><span>Score: 974</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 29</span><span>Anonymous</span><span>Score: 973</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 30</span><span>Anonymous</span><span>Score: 972</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 31</span><span>Anonymous</span><span>Score: 971</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 32</span><span>Anonymous</span><span>Score: 970</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 33</span><span>Anonymous</span><span>Score: 969</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 34</span><span>Anonymous</span><span>Score: 968</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 35</span><span>Anonymous</span><span>Score: 967</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 36</span><span>Anonymous</span><span>Score: 966</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 37</span><span>Anonymous</span><span>Score: 965</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 38</span><span>Anonymous</span><span>Score: 964</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 39</span><span>Anonymous</span><span>Score: 963</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 40</span><span>Anonymous</span><span>Score: 962</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 41</span><span>Anonymous</span><span>Score: 961</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 42</span><span>Anonymous</span><span>Score: 960</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 43</span><span>Anonymous</span><span>Score: 959</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 44</span><span>Anonymous</span><span>Score: 958</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 45</span><span>Anonymous</span><span>Score: 957</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 46</span><span>Anonymous</span><span>Score: 956</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 47</span><span>Anonymous</span><span>Score: 955</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 48</span><span>Anonymous</span><span>Score: 954</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 49</span><span>Anonymous</span><span>Score: 953</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 50</span><span>Anonymous</span><span>Score: 952</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 51</span><span>Anonymous</span><span>Score: 951</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 52</span><span>Anonymous</span><span>Score: 950</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 53</span><span>Anonymous</span><span>Score: 949</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 54</span><span>Anonymous</span><span>Score: 948</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 55</span><span>Anonymous</span><span>Score: 947</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 56</span><span>Anonymous</span><span>Score: 946</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 57</span><span>Anonymous</span><span>Score: 945</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 58</span><span>Anonymous</span><span>Score: 944</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 59</span><span>Anonymous</span><span>Score: 943</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 60</span><span>Anonymous</span><span>Score: 942</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 61</span><span>Anonymous</span><span>Score: 941</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 62</span><span>Anonymous</span><span>Score: 940</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 63</span><span>Anonymous</span><span>Score: 939</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 64</span><span>Anonymous</span><span>Score: 938</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 65</span><span>Anonymous</span><span>Score: 937</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 66</span><span>Anonymous</span><span>Score: 936</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 67</span><span>Anonymous</span><span>Score: 935</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 68</span><span>Anonymous</span><span>Score: 934</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 69</span><span>Anonymous</span><span>Score: 933</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 70</span><span>Anonymous</span><span>Score: 932</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 71</span><span>Anonymous</span><span>Score: 931</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 72</span><span>Anonymous</span><span>Score: 930</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 73</span><span>Anonymous</span><span>Score: 929</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 74</span><span>Anonymous</span><span>Score: 928</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 75</span><span>Anonymous</span><span>Score: 927</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 76</span><span>Anonymous</span><span>Score: 926</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 77</span><span>Anonymous</span><span>Score: 925</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 78</span><span>Anonymous</span><span>Score: 924</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 79</span><span>Anonymous</span><span>Score: 923</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 80</span><span>Anonymous</span><span>Score: 922</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 81</span><span>Anonymous</span><span>Score: 921</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 82</span><span>Anonymous</span><span>Score: 920</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 83</span><span>Anonymous</span><span>Score: 919</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 84</span><span>Anonymous</span><span>Score: 918</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 85</span><span>Anonymous</span><span>Score: 917</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 86</span><span>Anonymous</span><span>Score: 916</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 87</span><span>Anonymous</span><span>Score: 915</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 88</span><span>Anonymous</span><span>Score: 914</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 89</span><span>Anonymous</span><span>Score: 913</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 90</span><span>Anonymous</span><span>Score: 912</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 91</span><span>Anonymous</span><span>Score: 911</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 92</span><span>Anonymous</span><span>Score: 910</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 93</span><span>Anonymous</span><span>Score: 909</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 94</span><span>Anonymous</span><span>Score: 908</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 95</span><span>Anonymous</span><span>Score: 907</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 96</span><span>Anonymous</span><span>Score: 906</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 97</span><span>Anonymous</span><span>Score: 905</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 98</span><span>Anonymous</span><span>Score: 904</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 99</span><span>Anonymous</span><span>Score: 903</span></li>
<li className="flex justify-between border-b border-gray-700 py-1"><span># 100</span><span>Anonymous</span><span>Score: 902</span></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
