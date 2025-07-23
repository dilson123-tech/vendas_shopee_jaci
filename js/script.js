document.addEventListener("DOMContentLoaded", function() {
  console.log("Achadinhos da Jaci está no ar!");
});
<script>
  function ampliarImagem(img) {
    const modal = document.createElement('img');
    modal.src = img.src;
    modal.classList.add('modal-img');
    modal.onclick = () => modal.remove();
    document.body.appendChild(modal);
  }
</script>
