import { create } from 'zustand'
import { currentCart } from '@wix/ecom'
import { WixClient } from '@/context/wixContext'

type CartState = {
  cart: currentCart.Cart
  isLoading: boolean
  counter: number
  getCart: (wixClient: WixClient) => void
  addItem: (
    wixClient: WixClient,
    productId: string,
    variantId: string,
    quantity: number
  ) => void
  removeItem: (wixClient: WixClient, itemId: string) => void
  computeSubtotal: () => number
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: {
    lineItems: [],
  },
  isLoading: true,
  counter: 0,

  getCart: async (wixClient) => {
    try {
      const cart = await wixClient.currentCart.getCurrentCart()
      set({
        cart: cart || { lineItems: [] },
        isLoading: false,
        counter: cart?.lineItems.length || 0,
      })
    } catch (err) {
      set({ isLoading: false })
    }
  },

  addItem: async (wixClient, productId, variantId, quantity) => {
    set({ isLoading: true })

    const response = await wixClient.currentCart.addToCurrentCart({
      lineItems: [
        {
          catalogReference: {
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
            catalogItemId: productId,
            ...(variantId && { options: { variantId } }),
          },
          quantity: quantity,
        },
      ],
    })

    set({
      cart: response.cart,
      counter: response.cart?.lineItems.length || 0,
      isLoading: false,
    })
  },

  removeItem: async (wixClient, itemId) => {
    set({ isLoading: true })

    const response = await wixClient.currentCart.removeLineItemsFromCurrentCart(
      [itemId]
    )

    set({
      cart: response.cart,
      counter: response.cart?.lineItems.length || 0,
      isLoading: false,
    })
  },

  computeSubtotal: () => {
    const state = get()

    // Get the line items, default to an empty array if undefined
    const lineItems = state.cart.lineItems || []

    // Calculate the subtotal by iterating through each line item
    return lineItems.reduce((total, item) => {
      // Safely extract the price and convert it to a number
      const priceAmount = parseFloat(item.price?.amount ?? '0') // Convert to number, default to 0

      // Return the updated total, considering quantity
      return total + priceAmount * (item.quantity || 1)
    }, 0)
  },
}))
