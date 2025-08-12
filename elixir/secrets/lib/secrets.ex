defmodule Secrets do
  def secret_add(secret) do
    # Please implement the secret_add/1 function
    adder = fn number -> secret + number end
    adder
  end

  def secret_subtract(secret) do
    # Please implement the secret_subtract/1 function
    subtractor = fn number -> number - secret end
    subtractor
  end

  def secret_multiply(secret) do
    # Please implement the secret_multiply/1 function
    multiplier = fn number -> number * secret end
    multiplier
  end

  def secret_divide(secret) do
    # Please implement the secret_divide/1 function
    divider = fn number -> Integer.floor_div(number, secret) end
    divider
  end

  def secret_and(secret) do
    # Please implement the secret_and/1 function
    ander = fn number -> Bitwise.band(secret, number) end
    ander
  end

  def secret_xor(secret) do
    # Please implement the secret_xor/1 function
    xorer = fn number -> Bitwise.bxor(number, secret) end
    xorer
  end

  def secret_combine(secret_function1, secret_function2) do
    # Please implement the secret_combine/2 function
    combined = fn number ->
      result1 = secret_function1.(number)
      secret_function2.(result1)
    end
  end
end
