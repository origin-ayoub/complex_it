import { toast } from "react-toastify";

// Share password
export const sharePw = async (result) => {
    if (navigator.share) {
        await navigator.share({ text: result });
        return;
    }

    toast.warning("Sharing is Unsupported!!");
    return;
};

// Copy password to clipboard
export const copyToClip = async (result) => {
    try {
        if (!result || result === "") {
            navigator.vibrate(200);
            toast.warning('Nothing to copy');
            return;
        }

        await navigator.clipboard.writeText(result);
        toast.success('Copied to Clipboard');
        return;
    } catch (error) {
        console.error(error.message);
    }
}
