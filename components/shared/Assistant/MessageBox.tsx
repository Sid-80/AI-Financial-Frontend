"use client"
import runChat from "@/config/gemini";
import { RootState } from "@/components/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ShowResult, HideResult } from "@/components/Redux/Auth/auth-slice";
import Image from "next/image";
export default function MessageBox() {
  const [displayedResult, setDisplayedResult] = useState<string>("");
  const [prompt, setPrompt] = useState("");
  const Gen = useSelector((state: RootState) => state.ai.input);
  const resultData = useSelector((state: RootState) => state.ai.resultData);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 
        setPrompt(Gen)
        let response = await runChat(Gen);

        let processedResponse = processResponse(response);

        showResult(processedResponse);
        dispatch(ShowResult({ resultData: response })); 
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (Gen) {
      fetchData();
    }
  }, [Gen, dispatch]);

  useEffect(() => {
    if (resultData && !loading) {
      const timeoutId = setTimeout(() => {
        dispatch(HideResult());
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [resultData, loading, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(HideResult()); 
    };
  }, [dispatch]);

  const processResponse = (response: string): string => {
    let responseArray = response.split("**");
    let processedResponse: string = '';

    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        processedResponse += responseArray[i];
      } else {
        processedResponse += "<br/>" + responseArray[i] + "<br/>";
      }
    }

    return processedResponse;
  };

  const showResult = (result: string) => {
    setDisplayedResult(""); 

    let words = result.split(" ");
    let delay = 75; 
    words.forEach((word, index) => {
      setTimeout(() => {
        setDisplayedResult(prevResult => prevResult ? prevResult + " " + word : word);
      }, index * delay);
    });
  };

  return (
    <div className='flex-1 overflow-auto '>
      {prompt ? (<div className="py-0 max-h-[70vh] result  ">
                                <div className="my-[40px] mx-0 flex justify-end  mr-4 gap-5">  
                                    <p className="dark:text-white bg-[#1A1A1A] rounded-xl p-2 ">{prompt}</p>
                                </div>
                                <div className="flex items-start gap-5">
                                    <Image
                                        className={`${loading ? ' animate-pulse' : ''} rounded-full`}
                                        src={"/logo.svg"}
                                        alt=""
                                        width={30}
                                        height={30}
                                    />
                                        <p className="dark:text-white text-[17px] font-[300px] leading-[1.8]" dangerouslySetInnerHTML={{ __html: displayedResult }}></p>
                                </div>
                            </div>):
                            (
                              <p className=""></p>
                          )}
    </div>
  );
}
