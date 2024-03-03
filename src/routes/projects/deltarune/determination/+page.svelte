<script lang="ts">
    import { onMount } from 'svelte'

    let content: string = ''
    onMount(async () => {
        try {
            const response: Response = await fetch('/api/determination', {
                method: 'GET',
            })

            if (response.status === 200) {
                const data: Blob = await response.blob()
                const url: string = URL.createObjectURL(data)
                window.location.href = url
                URL.revokeObjectURL(url)
            } else {
                content = 'Error'
            }
        } catch (error: unknown) {
            content = 'Error'
        }
    })
</script>