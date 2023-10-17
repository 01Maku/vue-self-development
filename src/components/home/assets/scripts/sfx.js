const audioService = 
{
    logSuccess: new Audio("@/components/home/assets/sfx/nier-sfx-8.mp3"),
    logDenied: new Audio("@/components/home/assets/sfx/nier-sfx-5.mp3"),
  
    playLogSuccess() 
    {
      this.logSuccess.currentTime = 0;
      this.logSuccess.play();
    },
  
    playLogDenied() 
    {
      this.logDenied.currentTime = 0;
      this.logDenied.play();
    },
};
  
export
{
    audioService,
}