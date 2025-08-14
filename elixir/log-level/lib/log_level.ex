defmodule LogLevel do
  def to_label(level, legacy?) do cond do
      level === 0 and legacy? === false -> :trace
      level === 1 -> :debug
      level === 2 -> :info
      level === 3 -> :warning
      level === 4 -> :error
      level === 5 and legacy? === false -> :fatal
      true -> :unknown
    end
  end

  def alert_recipient(level, legacy?) do
    label_level = to_label(level, legacy?)
    cond do
      label_level in [:error, :fatal]-> :ops
      label_level === :unknown and legacy? === true -> :dev1
      label_level === :unknown and legacy? === false -> :dev2
      label_level !== :unknown -> false
    end
  end
end
