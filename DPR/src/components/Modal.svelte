<!-- Open the modal using ID.showModal() method -->
<script lang="ts">
	function handleModal() {
		const modal = document.querySelector('my_modal_2');
		if (modal instanceof HTMLDialogElement) {
			modal.showModal();
		} else {
			console.error('Modal not found!');
		}
	}
</script>

<button class="btn" on:click={handleModal}>open modal</button>
<dialog id="my_modal_2" class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Hello!</h3>
		<p class="py-4">Press ESC key or click outside to close</p>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
