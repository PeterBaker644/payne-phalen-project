<script>
  import mic from "$lib/images/microphone.png";
</script>

<div class='microphone'>
  <img src={mic} alt="a microphone with sound coming out">
</div>

<style>
  img {
    z-index: 5;
    position: absolute;
    right: 0rem;
    bottom: -15vw;
    transform: scaleX(-1) rotate(30deg) translateX(-2vw);
    width: clamp(4rem, 25vw, 20rem);
  }
  
  .microphone {


  }

</style>