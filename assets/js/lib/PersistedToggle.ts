type PersistedToggleCallback = (value: boolean) => void;
const storage = window.localStorage;

/**
 * A toggle helper that is persisted so it will "survive" a reload
 */
export class PersistedToggle
{
    private key: string;
    private callback: PersistedToggleCallback|undefined;
    private value: boolean;


    /**
     *
     * @param key
     * @param defaultValue
     */
    public constructor (key: string, defaultValue: boolean = false)
    {
        this.key = key;

        let stored: string|null = storage.getItem(key);
        this.value = null != stored
            ? "yes" === stored
            : defaultValue;
    }


    /**
     *
     */
    public init (callback: PersistedToggleCallback) : void
    {
        this.callback = callback;
        this.callback(this.value);
    }


    /**
     *
     * @param value
     */
    public toggle (value?: boolean) : void
    {
        if (!this.callback)
        {
            return;
        }

        // if a value is explicitly given use it, otherwise invert the current value
        let newValue = null != value
            ? value
            : !this.value;

        if (newValue !== this.value)
        {
            this.value = newValue;
            storage.setItem(this.key, newValue ? "yes" : "no");
            this.callback(newValue);
        }
    }
}
